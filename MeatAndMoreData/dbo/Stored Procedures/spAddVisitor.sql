CREATE PROCEDURE [dbo].[spAddVisitor]
	@Id int output,
	@VisitType int,
	@FirstName nvarchar(128),
	@LastName nvarchar(128),
	@Company nvarchar(128),
	@NumberPlate nvarchar(128),
	@IsPresent bit,
	@CreatedDate datetime2
AS
begin
	SET NOCOUNT ON
	INSERT INTO [dbo].[Visitor](VisitType,FirstName,LastName,Company,NumberPlate,IsPresent,CreatedDate)
	VALUES (@VisitType,@FirstName,@LastName,@Company,@NumberPlate,@IsPresent,@CreatedDate)

	SELECT @ID = @@IDENTITY
end
