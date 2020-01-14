CREATE TABLE [dbo].[Visitor]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [VisitType] INT NOT NULL, 
    [FirstName] NVARCHAR(128) NOT NULL, 
    [LastName] NVARCHAR(128) NOT NULL, 
    [Company] NVARCHAR(128) NULL, 
    [NumberPlate] NVARCHAR(20) NULL, 
    [IsPresent] BIT NULL DEFAULT 0, 
    [CreatedDate] DATETIME2 NULL DEFAULT getutcdate()
)
