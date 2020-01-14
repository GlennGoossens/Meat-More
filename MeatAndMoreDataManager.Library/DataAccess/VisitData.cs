using MeatAndMoreDataManager.Library.Internal.Calculations;
using MeatAndMoreDataManager.Library.Internal.DataAccess;
using MeatAndMoreDataManager.Library.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MeatAndMoreDataManager.Library.DataAccess
{
    public class VisitData
    {
        public void AddVisit(VisitModel visitModel)
        {
            SqlDataAccess sql = new SqlDataAccess();
            visitModel.EndDate = new DateTime(1754, 1, 1);
            visitModel.StartDate = DateTime.UtcNow;
            sql.SaveData<VisitModel>("dbo.spAddVisit", visitModel, "MeatAndMoreData");
        }

        public int[] GetVisitTimes()
        {
            SqlDataAccess sql = new SqlDataAccess();
            List<VisitModel> visits = sql.LoadData<VisitModel, dynamic>("dbo.spVisitTimesList", new { }, "MeatAndMoreData");
            DateTimeCalculator calc = new DateTimeCalculator();

            return calc.CalculateHourDifference(visits);
        }

        public List<VisitListModel> GetVisits()
        {
            SqlDataAccess sql = new SqlDataAccess();
            var parameters = new { };

            return sql.LoadData<VisitListModel, dynamic>("dbo.spVisitList", parameters, "MeatAndMoreData");
        }

        public void UpdateVisit(int id)
        {
            SqlDataAccess sql = new SqlDataAccess();
            var param = new
            {
                Id = id
            };
            sql.SaveData<dynamic>("dbo.spEndVisit", param, "MeatAndMoreData");
        }
    }
}
