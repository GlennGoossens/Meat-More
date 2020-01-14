CREATE PROCEDURE [dbo].[spEndVisit]
	@Id int
AS
BEGIN
SET NOCOUNT ON;
	UPDATE [dbo].[Visit]
	SET EndDate = GETDATE()
	WHERE VisitorId = @Id AND EndDate = '1-1-1754 00:00:00'
END
