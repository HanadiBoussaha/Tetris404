--
-- Table structure for table `User`
--

CREATE TABLE User(
   id VARCHAR(50),
   firstName VARCHAR(50) ,
   lastName VARCHAR(50) ,
   email VARCHAR(50) unique,
   password VARCHAR(250) ,
   gov VARCHAR(250) ,
   userName VARCHAR(250) ,
   createdAt DATETIME NOT NULL,
   updatedAt DATETIME NOT NULL,
   PRIMARY KEY(id)
);
      --
-- AUTO_INCREMENT for table `User`
--
ALTER TABLE `User`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;