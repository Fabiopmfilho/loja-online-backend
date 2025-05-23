/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsString, IsNumber, IsOptional, IsBoolean } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  slug: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNumber()
  price: number;

  @IsNumber()
  stock: number;

  @IsOptional()
  @IsString()
  barcode?: string;

  @IsOptional()
  @IsString()
  image?: string;

  @IsString()
  categoryId: string;

  @IsOptional()
  @IsBoolean()
  medicalPrescription?: boolean;

  @IsOptional()
  @IsBoolean()
  active?: boolean;
}
