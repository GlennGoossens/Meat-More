using MeatAndMoreDataManager.Library.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MeatAndMoreDataManager.Library.Internal.Calculations
{
    internal class DateTimeCalculator
    {
        public TimeSpan TimeSpan { get; private set; }

        public int[] CalculateHourDifference(List<VisitModel> visits)
        {
            DateTime minDate = new DateTime(1754, 1, 1);
            int[] output = new int[5];
            visits.ForEach(visit =>
            {
                if(!(visit.EndDate == minDate))
                {
                    TimeSpan dif = visit.EndDate - visit.StartDate;
                    int hourDif = Convert.ToInt32(Math.Ceiling(dif.TotalHours));
                    if (hourDif < 5) output[hourDif - 1]++;
                    else output[4]++;
                }                
            });

            return output;
        }

    }
}
