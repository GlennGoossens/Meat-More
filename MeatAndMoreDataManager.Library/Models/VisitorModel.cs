using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MeatAndMoreDataManager.Library.Models
{
    public class VisitorListModel
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Company { get; set; }
        public string NumberPlate { get; set; }
        public int VisitType { get; set; }
        public bool IsPresent { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;
    }
}
