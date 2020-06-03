import React from 'react'
import { Card, Icon, Image, Statistic,Button} from 'semantic-ui-react'

const CardExampleCard = (props) => (
    <Card style = {{width:360}}>
        <Image src='/images/timg.jpg' wrapped ui={false} />
        <Card.Content>
            <Card.Header>博彩中心</Card.Header>
            <Card.Meta>
                <span className='date'>2020.06.01</span>
            </Card.Meta>
            <Card.Description>
                工大最大彩票中心，成立于2020.06.01
            </Card.Description>
        </Card.Content>
        <Card.Content extra>
           <p>管理员区块地址 : {props.manager}</p>
        </Card.Content>
        <Card.Content extra>
            <a>
                <Icon name='user' />
                已有{props.banlance}人参与豪赌
            </a>
        </Card.Content>
        <Card.Content extra>
            <div>
                <p>目前奖池共计</p>
                <div>
                    <Statistic style={{marginLeft:10, width:80}}>
                        <Statistic.Value>{props.banlance}</Statistic.Value>
                        <Statistic.Label>RMB</Statistic.Label>
                    </Statistic>
                    <Button animated='fade'  style = {{marginLeft:20, height:60}} onClick={props.play} >
                        <Button.Content visible>投注放飞梦想</Button.Content>
                        <Button.Content hidden>$500 once</Button.Content>
                    </Button>
                </div>
            </div>
        </Card.Content>
        <Card.Content extra>
            <p>上期获奖者: {props.winner}</p>
        </Card.Content>
    </Card>
)

export default CardExampleCard