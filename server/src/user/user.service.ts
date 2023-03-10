import { Injectable } from '@nestjs/common'
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { InjectModel } from 'nestjs-typegoose'
import { NotFoundError } from 'rxjs'
import { UserModel } from './user.model'

@Injectable()
export class UserService {
	constructor(
		@InjectModel(UserModel) private readonly userModel: ModelType<UserModel>
	) {}

	async byId(_id: string) {
		const user = await this.userModel.findById(_id)
		if (!user) throw new NotFoundException('User not found')

		return user
	}
}
