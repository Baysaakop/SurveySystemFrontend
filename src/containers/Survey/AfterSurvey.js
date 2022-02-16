import { Button, Result } from "antd"

function AfterSurvey (props) {
    return (
        <div>
            <Result
                status="success"
                title="Thank you for your response."
                subTitle="Donec in est vel turpis pellentesque dictum ac ac justo. Suspendisse potenti. Vestibulum convallis ex turpis, eget dictum purus iaculis ac."
                extra={
                    <Button type="primary" href="/surveys">
                        Go to survey list
                    </Button>
                }
            />
        </div>
    )
}

export default AfterSurvey