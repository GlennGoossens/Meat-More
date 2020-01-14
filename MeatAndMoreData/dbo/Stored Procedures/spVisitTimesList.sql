CREATE PROCEDURE [dbo].[spVisitTimesList]

AS
begin
	set nocount on;
	SELECT StartDate, EndDate
	FROM [dbo].[Visit]
end
