import { IsString } from 'class-validator'
export class RefreshTokenDto {
	@IsString({
		message:
			'You did not receive a refresh token from the server or it is invalid',
	})
	refreshToken: string
}
