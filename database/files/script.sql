CREATE TABLE "User" (
  Id SERIAL NOT NULL,
  Nick VARCHAR(100) NOT NULL,
  Email VARCHAR(100) NOT NULL, 
  Password VARCHAR(100) NOT NULL,
  CoverPhoto VARCHAR(200),
  PerfilPhoto VARCHAR(200),
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
  CONSTRAINT FK_PostLike_Post FOREIGN KEY (PostId) REFERENCES "Post"(Id),
  PRIMARY KEY (UserId, PostId)
);

CREATE TABLE "PostCommentLike" (
	UserId INT,
  PostId INT,
  PostCommentId INT,
  CONSTRAINT FK_PostCommentLike_User FOREIGN KEY (UserId) REFERENCES "User"(Id),
  CONSTRAINT FK_PostCommentLike_Post FOREIGN KEY (PostId) REFERENCES "User"(Id),
  CONSTRAINT FK_PostCommentLike_PostComment FOREIGN KEY (PostCommentId) REFERENCES "User"(Id),
  PRIMARY KEY (UserId, PostId, PostCommentId)
);

CREATE TABLE "UserFriend" (
	UserId INT,
  FriendId INT,
  CONSTRAINT FK_UserFriend_User FOREIGN KEY (UserId) REFERENCES "User"(Id),
  CONSTRAINT FK_UserFriend_Friend FOREIGN KEY (FriendId) REFERENCES "User"(Id),
  PRIMARY KEY (UserId, FriendId)
);

INSERT INTO "User" (Nick, Email, Password, CoverPhoto, PerfilPhoto, CreatedAt)
  VALUES
('Naruto Uzumaki', 'narutouzumaki@fakebook.lab', '6a8047cda9f32487f243a3c3569bb84b', '6cfbe24bc9cf2cf20be588d2536c5063.jpg', 'f71a7c933874b5f01dcf4ceeee9b944d.jpg', to_timestamp('2020-06-22 17:50:10','YYYY-MM-DD HH24:MI:SS')),
('Shikamaru Nara', 'shikamarunara@fakebook.lab', '6a8047cda9f32487f243a3c3569bb84b', '8aa2f611cb0a32a693e5feeb101975a7.jpg', '6c72be0baacf775377351923291e39a6.jpg', to_timestamp('2020-08-13 20:33:23','YYYY-MM-DD HH24:MI:SS')),
('Harry Potter', 'harrypotter@fakebook.lab', '6a8047cda9f32487f243a3c3569bb84b', '4956badf7d4cdb061981468187d280e2.jpg', '5b1b80d4f19a27a250eaff5ee8f67be0.jpg', to_timestamp('2020-06-22 17:50:10','YYYY-MM-DD HH24:MI:SS')),
('Hermione Granger', 'hermionegranger@fakebook.lab', '6a8047cda9f32487f243a3c3569bb84b', 'cce612bc71c9fe5515d002dd0e97c5d7.jpg' , '66b0433488831a4f7c137ffd8c5aa91d.jpg', to_timestamp('2020-06-22 17:50:10','YYYY-MM-DD HH24:MI:SS')),
('Rony Weasley', 'ronyweasley@fakebook.lab', '6a8047cda9f32487f243a3c3569bb84b', '9e43b958c36c9fa78b6b17a866a13461.jpg', '0f36608b265e955b58a204b884df7aa7.jpg', to_timestamp('2020-06-22 17:50:10','YYYY-MM-DD HH24:MI:SS')),
('Sirius Black', 'siriusblack@fakebook.lab', '6a8047cda9f32487f243a3c3569bb84b', 'f4c58ee302d9c5e86f3231cbbeecbd17.jpg', '716f15242b700ed954192d62b589d222.jpg', to_timestamp('2020-06-22 17:50:10','YYYY-MM-DD HH24:MI:SS')),
('Lord Voldemort', 'lordvoldemort@fakebook.lab', '6a8047cda9f32487f243a3c3569bb84b', '0de9a45a7d341f7c471cd3b1cbc05be6.jpg', '3cdd72b46b3af9e4eb50fd8127c3de0a.jpg', to_timestamp('2020-06-22 17:50:10','YYYY-MM-DD HH24:MI:SS'));
