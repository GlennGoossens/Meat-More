CREATE PROCEDURE [dbo].[spVisitorUpdatePresence]
	@Id int,
	@IsPresent bit
AS
BEGIN
SET NOCOUNT ON;
	UPDATE [dbo].[Visitor]
	SET IsPresent = @IsPresent
	WHERE Id = @Id
END