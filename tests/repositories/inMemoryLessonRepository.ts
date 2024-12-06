import { Lesson } from "@prisma/client";
import { randomUUID } from "node:crypto";
import { CreateLessonData, LessonsRepository } from "../../src/repositories/LessonsRepository";

export class InMemoryLessonsRepository implements LessonsRepository {
  public itens: Lesson[] = [];

  async create(data: CreateLessonData) {
    this.itens.push({
      id: randomUUID(),
      title: data.title,
      description: data.description ?? null,
    });
  }
}