import { HttpStatus, Injectable } from '@nestjs/common';
import { ApiErrorCode } from 'src/common/api-error-code.enum';
import { ApiException } from 'src/common/api.exception';
import { UserAddDto } from './user.types';

@Injectable()
export class UserService {
  listUsers(pageNo = 1, pageSize = 10): string[] {
    console.log(pageNo, pageSize);
    return Array(10)
      .fill(0)
      .map((_, i) => `user-${i}-${Math.random() * 100}`);
  }

  addUser(user: UserAddDto): UserAddDto {
    console.log(user, 'user');
    // return 'hello world';
    if (user && user.name) {
      return user;
    }
    throw new ApiException(
      '用户名不存在',
      ApiErrorCode.USER_ID_INVALID,
      HttpStatus.UNAUTHORIZED,
    );
  }
}
