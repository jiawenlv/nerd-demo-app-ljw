

export default async function business(input_1) {
// business 业务节点处理器
import javascript1 from './javascript1'
import javascript2 from './javascript2'

export default async function businessHandler(context) {
    console.log('执行业务节点: business')

    // 执行内部节点
    // 调用 Javascript1
    const javascript1Result = await javascript1(context)
    context = { ...context, ...javascript1Result }
    // 调用 Javascript2
    const javascript2Result = await javascript2(context)
    context = { ...context, ...javascript2Result }

    // 生成输出
    // 设置输出: output2
    context.output2 = "$.Javascript2.outputs.result2"

    return context
}
}
