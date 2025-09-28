import { prisma } from "../../db/client.js";
import { randomUUID } from "crypto";
import { AppError } from "../../common/appError.js";

export default async function createUsesr(userData) {
  try {
    const result = await prisma.user.create({
      data:       {
            "id": randomUUID(),
            "name": userData.name,
            "password": userData.password
      }
    });
    
    return {
      user: result
    };
  } catch (error) {
    console.error(`Data node "createUsesr" operation "create" failed:`, error);
    throw new Error(`Data operation "create" on model "user" failed: ${error.message}`);
  }
}
