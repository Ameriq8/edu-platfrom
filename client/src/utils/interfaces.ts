import { ELessonType } from './enums';

export interface TeacherCardProps {
  teachers: ITeacher[];
  limit: number;
  page: number;
}

export interface ITeacher {
  id: string;
  name: string;
  image_url: string;
  lesson: string;
  type: ELessonType;
  price: number;
  discount: number;
}
