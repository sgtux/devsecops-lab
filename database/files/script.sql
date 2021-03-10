CREATE TABLE "User" (
  Id SERIAL NOT NULL,
  Nick VARCHAR(100) NOT NULL,
  Email VARCHAR(100) NOT NULL, 
  Password VARCHAR(100) NOT NULL,
  Photo VARCHAR(200),
  CreatedAt TIMESTAMP NULL NULL,
  UpdatedAt TIMESTAMP,
  PRIMARY KEY (Id)
);

CREATE TABLE "Post" (
  Id SERIAL,
  Text VARCHAR(200) NOT NULL,
  Photo VARCHAR(200),
	UserId INT NOT NULL,
  AccessType INT NOT NULL,
  CreatedAt TIMESTAMP NOT NULL,
  UpdatedAt TIMESTAMP,
  PRIMARY KEY (Id),
  CONSTRAINT FK_Post_User FOREIGN KEY (UserId) REFERENCES "User"(Id)
);

CREATE TABLE "PostComment" (
  Id SERIAL,
  Description VARCHAR(200),
	UserId INT,
  PostId INT,
  CreatedAt TIMESTAMP,
  CONSTRAINT FK_PostComment_User FOREIGN KEY (UserId) REFERENCES "User"(Id),
  CONSTRAINT FK_PostComment_Post FOREIGN KEY (PostId) REFERENCES "Post"(Id)
);

CREATE TABLE "PostLike" (
	UserId INT,
  PostId INT,
  CONSTRAINT FK_PostLike_User FOREIGN KEY (UserId) REFERENCES "User"(Id),
  CONSTRAINT FK_PostLike_Post FOREIGN KEY (PostId) REFERENCES "Post"(Id)
);

CREATE TABLE "PostCommentLike" (
	UserId INT,
  PostId INT,
  PostCommentId INT,
  CONSTRAINT FK_PostCommentLike_User FOREIGN KEY (UserId) REFERENCES "User"(Id),
  CONSTRAINT FK_PostCommentLike_Post FOREIGN KEY (PostId) REFERENCES "User"(Id),
  CONSTRAINT FK_PostCommentLike_PostComment FOREIGN KEY (PostCommentId) REFERENCES "User"(Id)
);

CREATE TABLE "UserFriend" (
	UserId INT,
  FriendId INT,
  CONSTRAINT FK_UserFriend_User FOREIGN KEY (UserId) REFERENCES "User"(Id),
  CONSTRAINT FK_UserFriend_Friend FOREIGN KEY (FriendId) REFERENCES "User"(Id),
  PRIMARY KEY (UserId, FriendId)
);

INSERT INTO "User" (Nick, Email, Password, CreatedAt)
  VALUES
('Naruto Uzumaki', 'narutouzumaki@fakebook.lab', '6a8047cda9f32487f243a3c3569bb84b', to_timestamp('2020-06-22 17:50:10','YYYY-MM-DD HH24:MI:SS')),
('Shikamaru Nara', 'shikamarunara@fakebook.lab', '6a8047cda9f32487f243a3c3569bb84b', to_timestamp('2020-08-13 20:33:23','YYYY-MM-DD HH24:MI:SS')),
('Harry Potter', 'harrypotter@fakebook.lab', '6a8047cda9f32487f243a3c3569bb84b', to_timestamp('2020-06-22 17:50:10','YYYY-MM-DD HH24:MI:SS')),
('Hermione Granger', 'hermionegranger@fakebook.lab', '6a8047cda9f32487f243a3c3569bb84b', to_timestamp('2020-06-22 17:50:10','YYYY-MM-DD HH24:MI:SS')),
('Rony Weasley', 'ronyweasley@fakebook.lab', '6a8047cda9f32487f243a3c3569bb84b', to_timestamp('2020-06-22 17:50:10','YYYY-MM-DD HH24:MI:SS')),
('Sirius Black', 'siriusblack@fakebook.lab', '6a8047cda9f32487f243a3c3569bb84b', to_timestamp('2020-06-22 17:50:10','YYYY-MM-DD HH24:MI:SS')),
('Lord Voldemort', 'lordvoldemort@fakebook.lab', '6a8047cda9f32487f243a3c3569bb84b', to_timestamp('2020-06-22 17:50:10','YYYY-MM-DD HH24:MI:SS'));
