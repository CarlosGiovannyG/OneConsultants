import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import {HydratedDocument}  from 'mongoose';

export type UsersDocument = HydratedDocument<Users>;

@Schema()
export class Users {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  lastname: string;
  @Prop({ required: true })
  email: string;
  @Prop({ required: true, default: 0 })
  phone: number;
  @Prop({ required: true, default: 0 })
  document: number;
  @Prop({ required: true })
  nameSchool: string;
  @Prop({ required: true })
  citySchool: string;
  @Prop({ required: true })
  emailSchool: string;
  @Prop({ required: true, default: 0 })
  phoneSchool: number;
  @Prop({ required: true })
  teacher: string;
 
}

export const UsersSchema = SchemaFactory.createForClass(Users);
