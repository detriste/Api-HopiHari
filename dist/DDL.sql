-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS mydb ;

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS mydb DEFAULT CHARACTER SET utf8 ;
USE mydb ;

-- -----------------------------------------------------
-- Table mydb.users
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.users (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(200) NOT NULL,
  last_name VARCHAR(200) NOT NULL,
  email VARCHAR(200) NOT NULL,
  password VARCHAR(200) NOT NULL,
  birth_date DATE NOT NULL,
  phone VARCHAR(200) NOT NULL,
  created_at TIMESTAMP NOT NULL,
  updated_at TIMESTAMP NULL,
  PRIMARY KEY (id),
  UNIQUE INDEX cpf_UNIQUE (birth_date ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table mydb.Lines
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.Lines (
  id_ride INT NOT NULL,
  atracoes_id INT NULL,
  PRIMARY KEY (id_ride))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table mydb.atracoes
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.atracoes (
  id INT NOT NULL,
  nome VARCHAR(45) NULL,
  waiting_time INT NULL,
  status VARCHAR(200) NULL,
  area VARCHAR(45) NULL,
  PRIMARY KEY (id))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table mydb.notifications
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS mydb.notifications (
  id_user INT NOT NULL,
  status TINYINT NULL,
  users_id INT NOT NULL,
  atracoes_id INT NOT NULL,
  PRIMARY KEY (id_user),
  INDEX fk_notifications_users_idx (users_id ASC) VISIBLE,
  INDEX fk_notifications_atracoes1_idx (atracoes_id ASC) VISIBLE,
  CONSTRAINT fk_notifications_users
    FOREIGN KEY (users_id)
    REFERENCES mydb.users (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT fk_notifications_atracoes1
    FOREIGN KEY (atracoes_id)
    REFERENCES mydb.atracoes (id)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;