CREATE PROCEDURE [dbo].[spVisitorFind]
	@FirstName nvarchar(128),
	@LastName nvarchar(128)
AS
BEGIN
SET NOCOUNT ON;
	SELECT Id
	FROM [dbo].[Visitor]
	Where FirstName = @FirstName and LastName = @LastName
END

