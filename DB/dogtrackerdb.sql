-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema dogtrackerDB
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `dogtrackerDB` ;

-- -----------------------------------------------------
-- Schema dogtrackerDB
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dogtrackerDB` DEFAULT CHARACTER SET utf8 ;
USE `dogtrackerDB` ;

-- -----------------------------------------------------
-- Table `dog`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dog` ;

CREATE TABLE IF NOT EXISTS `dog` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(500) NOT NULL,
  `breed` VARCHAR(500) NOT NULL,
  `color` VARCHAR(100) NOT NULL,
  `age` INT NOT NULL,
  `weight` INT NOT NULL,
  `is_fixed` TINYINT NOT NULL,
  `image_url` VARCHAR(5000) NULL,
  `sex` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS doglover@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'doglover'@'localhost' IDENTIFIED BY 'doglover';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'doglover'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `dog`
-- -----------------------------------------------------
START TRANSACTION;
USE `dogtrackerDB`;
INSERT INTO `dog` (`id`, `name`, `breed`, `color`, `age`, `weight`, `is_fixed`, `image_url`, `sex`) VALUES (1, 'Kevin', 'Golden Retriever', 'Golden', 3, 85, 1, 'https://vetstreet.brightspotcdn.com/dims4/default/21dc2d6/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F9f%2F9b%2F6ff000df4e4d8e8c70608cf6e0f5%2Fgolden-retriever-ap-0johoo-645.jpg', 'Male');
INSERT INTO `dog` (`id`, `name`, `breed`, `color`, `age`, `weight`, `is_fixed`, `image_url`, `sex`) VALUES (DEFAULT, 'Charlie', 'Golden Retriever', 'Golden', 5, 70, 1, 'https://www.indiantrailanimalhospital.com/sites/default/files/styles/large/public/golden-retriever-dog-breed-info.jpg?itok=XjcldPnx', 'Male');
INSERT INTO `dog` (`id`, `name`, `breed`, `color`, `age`, `weight`, `is_fixed`, `image_url`, `sex`) VALUES (DEFAULT, 'James', 'Pit Bull', 'White', 4, 75, 1, 'https://dogtime.com/assets/uploads/gallery/pit-bull-dog-breed-pictures/pit-bull-dog-breed-picture-1.jpg', 'Male');
INSERT INTO `dog` (`id`, `name`, `breed`, `color`, `age`, `weight`, `is_fixed`, `image_url`, `sex`) VALUES (DEFAULT, 'Karen', 'Chihuahua', 'Beige', 12, 4, 1, 'https://s36700.pcdn.co/wp-content/uploads/2015/05/shutterstock_1741426311.jpg.optimal.jpg', 'Female');
INSERT INTO `dog` (`id`, `name`, `breed`, `color`, `age`, `weight`, `is_fixed`, `image_url`, `sex`) VALUES (DEFAULT, 'John', 'English Mastiff ', 'Tan', 3, 124, 0, 'https://vetstreet-brightspot.s3.amazonaws.com/72/32/f2a109cc4a59aec759fca90db449/mastiff-ap-1czd1n-645.jpg', 'Male');
INSERT INTO `dog` (`id`, `name`, `breed`, `color`, `age`, `weight`, `is_fixed`, `image_url`, `sex`) VALUES (DEFAULT, 'Katie', 'Golden Retriever', 'White', 4, 60, 1, 'https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:eco%2Cw_1200/MTc0MDk2MzYxNjM1OTgwODY2/what-you-should-know-about-owning-a-golden-retriever.jpg', 'Famale');
INSERT INTO `dog` (`id`, `name`, `breed`, `color`, `age`, `weight`, `is_fixed`, `image_url`, `sex`) VALUES (DEFAULT, 'Jasmine', 'German Shepard', 'Tan and Black', 3, 85, 1, 'https://cf.ltkcdn.net/dogs/images/orig/284637-1600x1066-german-shepherd-characteristics.jpg', 'Female');
INSERT INTO `dog` (`id`, `name`, `breed`, `color`, `age`, `weight`, `is_fixed`, `image_url`, `sex`) VALUES (DEFAULT, 'Frank', 'German Short Haired Pointer', 'Brown', 7, 56, 0, 'https://www.akc.org/wp-content/uploads/2021/03/German-Shorthaired-Pointer-puppy-walking-through-a-grassy-field..jpg', 'Male');

COMMIT;

