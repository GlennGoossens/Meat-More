using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MeatAndMoreDataManager.Library.Models
{
    public class VisitModel
    {
        public int Id { get; set; }
        public int VisitorId { get; set; }
        public DateTime StartDate { get; set; } = DateTime.Now;
        public DateTime EndDate { get; set; }
    }
}
