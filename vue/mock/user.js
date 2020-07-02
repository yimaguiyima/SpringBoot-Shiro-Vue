
const tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}

module.exports = [
  // user login
  {
    url: '/login/auth',
    type: 'post',
    response: config => {
      const { username } = config.body
      const token = tokens[username]

      return {
        msg: "请求成功",
        code: "100",
        info: {
          result: "success"
        }
      }
    }
  },

  // get user info
  {
    url: '/login/getInfo',
    type: 'post',
    response: config => {
      const { token } = config.query
      const info = users[token]

      // mock error
      // if (!info) {
      //   return {
      //     code: 50008,
      //     message: 'Login failed, unable to get user details.'
      //   }
      // }

      return {
        msg: "请求成功",
        code: "100",
        info: {
          userPermission: {
            menuList: [
              "role",
              "user",
              "article"
            ],
            roleId: 1,
            nickname: "超级用户23",
            roleName: "管理员",
            permissionList: [
              "article:list",
              "user:list",
              "user:add",
              "role:update",
              "article:add",
              "role:list",
              "article:update",
              "user:update",
              "role:delete",
              "role:add"
            ],
            userId: 10003
          }
        }
      }
    }
  },

  // user logout
  {
    url: '/vue-admin-template/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]
