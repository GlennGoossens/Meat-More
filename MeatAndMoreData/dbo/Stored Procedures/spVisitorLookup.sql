CREATE PROCEDURE [dbo].[spVisitorLookup]
	@FirstName nvarchar(128),
	@CreatedDate datetime2(7)
AS
BEGIN
SET NOCOUNT ON;
	SELECT Id
	FROM [dbo].[Visitor]
	Where CreatedDate = @CreatedDate AND FirstName = @FirstName;
END
