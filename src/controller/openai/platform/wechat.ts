import { genFail, genSuccess, genMyResponse } from '../../../utils'
import { CONST, CONFIG as GLOBAL_CONFIG } from '../../../global'
import { CONFIG } from '../config'
import * as kv from '../kv'
import { estimateTokenCount } from '../utils'
import { CONFIG as WE_CHAT_CONFIG } from '../../../platform/wechat/wechat'
import { WeChatBaseHandler } from './wechatBase'

import type { WeChat } from '../../../platform/wechat/wechat'

const MODULE = 'src/openai/platform/wechat.ts'

export class WeChatHandler extends WeChatBaseHandler<WeChat> {
  async initCtx() {
    const { platform, appid, userId } = this.platform.ctx

    if (WE_CHAT_CONFIG.WECHAT_ADMIN_USER_ID_LIST.includes(userId)) {
      this.ctx.role.add(CONST.ROLE.ADMIN)
    }

    return super.initCtx()
  }
}
