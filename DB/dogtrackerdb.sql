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
  `image_url` VARCHAR(2000) NULL,
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
INSERT INTO `dog` (`id`, `name`, `breed`, `color`, `age`, `weight`, `is_fixed`, `image_url`, `sex`) VALUES (1, 'Kevin', 'Golden Retriever', 'Golden', 3, 85, 1, NULL, 'Male');
INSERT INTO `dog` (`id`, `name`, `breed`, `color`, `age`, `weight`, `is_fixed`, `image_url`, `sex`) VALUES (DEFAULT, 'Charlie', 'Golden Retriever', 'Golden', 5, 70, 1, NULL, 'Male');
INSERT INTO `dog` (`id`, `name`, `breed`, `color`, `age`, `weight`, `is_fixed`, `image_url`, `sex`) VALUES (DEFAULT, 'James', 'Pit Bull', 'White', 4, 75, 1, NULL, 'Male');
INSERT INTO `dog` (`id`, `name`, `breed`, `color`, `age`, `weight`, `is_fixed`, `image_url`, `sex`) VALUES (DEFAULT, 'Karen', 'chihuahua', 'Beige', 12, 4, 1, NULL, 'Female');
INSERT INTO `dog` (`id`, `name`, `breed`, `color`, `age`, `weight`, `is_fixed`, `image_url`, `sex`) VALUES (DEFAULT, 'John', 'English Mastiff ', 'Tan', 3, 124, 0, NULL, 'Male');
INSERT INTO `dog` (`id`, `name`, `breed`, `color`, `age`, `weight`, `is_fixed`, `image_url`, `sex`) VALUES (DEFAULT, 'Katie', 'Golden Retriever', 'White', 4, 60, 1, NULL, 'Famale');
INSERT INTO `dog` (`id`, `name`, `breed`, `color`, `age`, `weight`, `is_fixed`, `image_url`, `sex`) VALUES (DEFAULT, 'Jasmine', 'German Shepard', 'Tan and Black', 3, 85, 1, NULL, 'Female');
INSERT INTO `dog` (`id`, `name`, `breed`, `color`, `age`, `weight`, `is_fixed`, `image_url`, `sex`) VALUES (DEFAULT, 'Frank', 'German Short Haired Pointer', 'Brown', 7, 56, 0, NULL, 'Male');

COMMIT;

