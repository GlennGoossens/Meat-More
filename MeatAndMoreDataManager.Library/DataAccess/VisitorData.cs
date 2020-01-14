using MeatAndMoreDataManager.Library.Internal.DataAccess;
using MeatAndMoreDataManager.Library.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MeatAndMoreDataManager.Library.DataAccess
{
    public class VisitorData
    {
        public List<VisitorListModel> GetVisitors()
        {
            SqlDataAccess sql = new SqlDataAccess();
            var parameters = new { };

            return sql.LoadData<VisitorListModel, dynamic>("dbo.spVisitorList",parameters,"MeatAndMoreData");
        }

        public void UpdatePresence(int id, bool v)
        {
            SqlDataAccess sql = new SqlDataAccess();
            var parameters = new { Id = id, IsPresent = v };
            sql.SaveData<dynamic>("dbo.spVisitorUpdatePresence", parameters,"MeatAndMoreData");
        }

        public List<VisitorListModel> FindVisitorByName(string firstName,string lastName)
        {
            SqlDataAccess sql = new SqlDataAccess();
            var parameters = new { FirstName = firstName, LastName = lastName };
            return sql.LoadData<VisitorListModel, dynamic>("dbo.spVisitorFind", parameters, "MeatAndMoreData");
        }

        public int AddVisitor(VisitorListModel visitorModel)
        {
            SqlDataAccess sql = new SqlDataAccess();

            
            sql.SaveData<VisitorListModel>("dbo.spAddVisitor", visitorModel, "MeatAndMoreData");

            int id = sql.LoadData<int, dynamic>("dbo.spVisitorLookup", new { visitorModel.FirstName, visitorModel.CreatedDate }, "MeatAndMoreData").FirstOrDefault();
            return id;
        }

        

    }
}
