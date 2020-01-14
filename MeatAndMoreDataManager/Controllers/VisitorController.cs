using MeatAndMoreDataManager.Library.DataAccess;
using MeatAndMoreDataManager.Library.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Http.Cors;

namespace MeatAndMoreDataManager.Controllers
{
    public class VisitorController : ApiController
    {
        [HttpGet]
        [Authorize]
        public List<VisitorListModel> GetVisitors()
        {
            VisitorData data = new VisitorData();
            return data.GetVisitors();
        }

        [HttpGet]
        [Route("api/Visitor/find/{firstName}/{lastName}")]
        public VisitorListModel FindVisitorByName(string firstName,string lastName)
        {
            VisitorData data = new VisitorData();
            return data.FindVisitorByName(firstName, lastName).FirstOrDefault();
        }

        [HttpPost]
        public void AddVisitor(VisitorListModel visitorModel)
        {
            VisitorData data = new VisitorData();
            VisitData visitData = new VisitData();

            var visitorId = data.AddVisitor(visitorModel);
            VisitModel visit = new VisitModel
            {
                VisitorId = visitorId
            };
            visitData.AddVisit(visit);
        }
    }
}
