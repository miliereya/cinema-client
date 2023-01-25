import { IActor } from "@/shared/types/actor";

export interface IActorEditInput extends Omit<IActor, '_id'> {}