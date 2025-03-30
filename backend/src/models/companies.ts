import {
  AllowNull,
  Column,
  DataType,
  Default,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import Server from "./server";

@Table({
  underscored: true,
})
export default class Companies extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  companiesId: string;

  @AllowNull(false)
  @Column
  companiesName: string;

  @HasMany(() => Server)
  server: Server[];
}
