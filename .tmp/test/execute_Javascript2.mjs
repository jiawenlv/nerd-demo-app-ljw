import originalModule from '../../src/logic/test/javascript2.js';

async function execute() {
    try {
        const inputs = JSON.parse(process.argv[2] || '{}');


        let result;
        if (typeof originalModule === 'function') {
            result = await originalModule(inputs);
        } else if (originalModule.default && typeof originalModule.default === 'function') {
            result = await originalModule.default(inputs);
        } else {
            throw new Error('无法找到可执行的函数');
        }

        console.log('__WORKFLOW_RESULT_START__');
        console.log(JSON.stringify({ success: true, data: result }));
        console.log('__WORKFLOW_RESULT_END__');

    } catch (error) {
        console.log('__WORKFLOW_RESULT_START__');
        console.log(JSON.stringify({
            success: false,
            error: error.message,
            stack: error.stack
        }));
        console.log('__WORKFLOW_RESULT_END__');
    }
}

execute().catch(console.error);