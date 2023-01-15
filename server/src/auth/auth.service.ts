import { Injectable } from '@nestjs/common'
import {
	BadRequestException,
	UnauthorizedException,
} from '@nestjs/common/exceptions'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { InjectModel } from 'nestjs-typegoose'
import { UserModel } from 'src/user/user.model'
import { AuthDto } from './dto/auth.dto'
import { hash, genSalt, compare } from 'bcryptjs'

@Injectable()
export class AuthService {
	constructor(
		@InjectModel(UserModel) private readonly userModel: ModelType<UserModel>
	) {}

	async login(dto: AuthDto) {
		return this.validateUser(dto)
	}

	async register(dto: AuthDto) {
		const existUser = await this.userModel.findOne({ email: dto.email })
		if (existUser) throw new BadRequestException('User already registered')

		const salt = await genSalt(10)

		const newUser = new this.userModel({
			email: dto.email,
			password: await hash(dto.password, salt),
		})

		return newUser.save()
	}

	async validateUser(dto: AuthDto): Promise<UserModel> {
		const user = await this.userModel.findOne({ email: dto.email })
		if (!user) throw new UnauthorizedException('User not found')

		const isValidPassword = await compare(dto.password, user.password)
		if (!isValidPassword)
			throw new UnauthorizedException('Invalid email or password')

		return user
	}
}
