import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  Default,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from "sequelize-typescript";
import Companies from "./companies";

@Table({
  underscored: true,
})
export default class Server extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  serverId: string;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  serverName: string;

  @ForeignKey(() => Companies)
  @AllowNull(false)
  @Column(DataType.UUID)
  companiesId: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  ip: string;

  @AllowNull(false)
  @Default("active")
  @Column(DataType.ENUM("active", "inactive"))
  status: string;

  @AllowNull(false)
  @Default(DataType.NOW)
  @Column(DataType.DATE)
  createdAt: Date;

  @BelongsTo(() => Companies)
  companies: Companies;
}
