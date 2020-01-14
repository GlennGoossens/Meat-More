CREATE PROCEDURE [dbo].[spVisitorList]
AS
begin
	set nocount on;
	SELECT FirstName, LastName, Company,NumberPlate,VisitType, IsPresent
	FROM [dbo].[Visitor]
	WHERE IsPresent = 1
end
