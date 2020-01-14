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
    [EnableCors("*","*","*")]
    public class VisitController : ApiController
    {

        [HttpGet]
        [Authorize]
        public List<VisitListModel> GetVisits()
        {
            VisitData data = new VisitData();
            return data.GetVisits();
        }
        
        [HttpGet]
        [Authorize]
        [Route("api/Visit/times")]
        public int[] GetVisitTimes()
        {
            VisitData data = new VisitData();
            return data.GetVisitTimes();
        }
        
        [HttpPost]
        public void CreateVisit(VisitModel visitModel)
        {
            VisitorData visitorData = new VisitorData();
            visitorData.UpdatePresence(visitModel.VisitorId, true);

            VisitData data = new VisitData();
            data.AddVisit(visitModel);
        }
        [HttpPut]
        public void UpdateVisit(int id)
        {
            VisitorData visitorData = new VisitorData();
            visitorData.UpdatePresence(id, false);

            VisitData data = new VisitData();
            data.UpdateVisit(id);
        }
    }
}