CREATE PROCEDURE [dbo].[spAddVisit]
	@Id int output,
	@VisitorId int,
	@StartDate datetime2,
	@EndDate datetime2
AS
begin
	SET NOCOUNT ON
	INSERT INTO [dbo].[Visit](VisitorId,StartDate,EndDate)
	VALUES (@VisitorId,@StartDate,@EndDate)

	SELECT @ID = @@IDENTITY
end
