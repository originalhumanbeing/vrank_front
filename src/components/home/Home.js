import React, {Component} from 'react';
import "./home.css"
import {GridList, GridTile} from 'material-ui/GridList';

//사용해야할 컴포넌트 grid-list

const varietyShowCategories = [
    {
        title: "여행 가고 싶을 때",
        items: [
            {
                title: "신서유기",
                src: "/test_images/sinseoyugi.jpg",
                episodes: [{}]
            },
            {
                title: "정글의 법칙",
                src: "/test_images/jungle.jpg"
            },
            {
                title: "배틀트립",
                src: "/test_images/battletrip.jpg"
            },
            {
                title: "1박 2일",
                src: "/test_images/2nights1day.jpg"
            },
            {
                title: "뭉쳐야 뜬다",
                src: "/test_images/mungcheoyaddunda.jpg"
            }
        ]
    },
    {
        title: "먹고 사는 이야기",
        items: [
            {
                title: "나 혼자 산다",
                src: "/test_images/nahonjasanda.jpg"
            },
            {
                title: "전지적 참견 시점",
                src: "/test_images/jeonjijeokchamgeon.jpg"
            },
            {
                title: "이불 밖은 위험해",
                src: "/test_images/ebulbakeunwiheomhae.jpg"
            },
            {
                title: "냉장고를 부탁해",
                src: "/test_images/nangjanggo.jpg"
            },
            {
                title: "효리네 민박",
                src: "/test_images/hyorineminbak.jpg"
            }
        ]
    },
    {
        title: "음악이 듣고 싶을 때",
        items: [
            {
                title: "복면가왕",
                src: "/test_images/bokmyeongawang.jpg"
            },
            {
                title: "M COUNT DOWN",
                src: "/test_images/mcountdown.jpg"
            },
            {
                title: "주간아이돌",
                src: "/test_images/weeklyidol.jpg"
            },
            {
                title: "투유 프로젝트 - 슈가맨2",
                src: "/test_images/toyouproject.jpg"
            }
        ]
    },
];

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
    },
    titleStyle: {
        color: 'rgb(0, 188, 212)',
    },
};

class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            visibleEpiBlockFlags: []
        };
    }

    componentDidMount() {
        this.setState({'visibleEpiBlockFlags': varietyShowCategories.map(() => false)});
        console.log(this.state.visibleEpiBlockFlags);
    }

    onClickVarietyShowElement = (cate_idx, show_idx) => {
        return () => {
            let visibleEpiBlockFlags = this.state.visibleEpiBlockFlags;
            visibleEpiBlockFlags = visibleEpiBlockFlags.map((el) => false)
            visibleEpiBlockFlags[cate_idx] = true;

            //cate_idx가 들어가는 이유: 어떤 쇼를 택하든 밑에 박스가 나오는 것은 동일
            //그 박스 안에 들어가는 내용만 바꿔서 렌더링 해주면 되니까 꼭 show_idx를 전달하지 않아도 됌
            this.setState({'visibleEpiBlockFlags': visibleEpiBlockFlags});
            console.log(cate_idx, show_idx, this.state.visibleEpiBlockFlags)
        }
    }

    onClickCloseBtn = () => {
        let visibleEpiBlockFlags = this.state.visibleEpiBlockFlags;
        visibleEpiBlockFlags = visibleEpiBlockFlags.map((el) => false);
        this.setState({'visibleEpiBlockFlags': visibleEpiBlockFlags});
    };

    render() {
        return (
            <div className="wrapper">
                <div className="main-billboard">
                    메인 빌보드
                </div>
                <div className="category-wrapper">
                    {varietyShowCategories.map((cate, idx) =>
                        <div style={styles.root}>
                            <h3>{cate.title}</h3>
                            <GridList cellHeight={280} cols={2.2} key={idx}
                                      style={styles.gridList}>
                                {cate.items.map((show, show_idx) =>
                                    <GridTile key={show_idx} title={show.title}
                                              onClick={this.onClickVarietyShowElement(idx, show_idx)}>
                                        <img src={show.src} alt=""/>
                                    </GridTile>
                                )}
                            </GridList>
                            {this.state.visibleEpiBlockFlags[idx] ?
                                <div style={styles.root}>
                                    <h4>episode title</h4>
                                    <GridList cellHeight={280} cols={2.2} key={1} style={styles.gridList}>
                                        <GridTile>episode here!</GridTile>
                                    </GridList>
                                    <button onClick={this.onClickCloseBtn}>X</button>
                                </div> : ''}
                        </div>
                    )}
                </div>

            </div>
        );
    }
}

export default Home;
