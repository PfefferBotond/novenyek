import { IsOptional } from "class-validator";

export default class ChangePlantsData {
  @IsOptional()
  plantname: string;

  @IsOptional()
  plantcolor: string;
}

