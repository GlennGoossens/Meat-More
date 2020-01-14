CREATE TABLE [dbo].[Visit]
(
	[Id] INT NOT NULL PRIMARY KEY IDENTITY, 
    [VisitorId] INT NOT NULL, 
    [StartDate] DATETIME2 NOT NULL DEFAULT getutcdate(), 
    [EndDate] DATETIME2 NULL
)
