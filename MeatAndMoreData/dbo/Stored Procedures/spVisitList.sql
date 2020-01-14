CREATE PROCEDURE [dbo].[spVisitList]
AS
begin
	set nocount on;
	SELECT Visit.Id,Visit.VisitorId,Visit.StartDate, Visit.EndDate, Visitor.FirstName, Visitor.LastName
	FROM [dbo].[Visit] as Visit
	JOIN [dbo].[Visitor] as Visitor ON Visit.VisitorId = Visitor.Id
END
