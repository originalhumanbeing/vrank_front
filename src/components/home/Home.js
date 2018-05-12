import React, {Component} from 'react';
import "./home.css"
import {GridList, GridTile} from 'material-ui/GridList';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Dialog from 'material-ui/Dialog';
import StarRatings from 'react-star-ratings';
import Star from 'react-star-ratings/build/star';

//사용해야할 컴포넌트 grid-list

const varietyShowCategories = [
    {
        title: "여행 가고 싶을 때",
        items: [
            {
                title: "신서유기",
                src: "/test_images/sinseoyugi.jpg",
                ratio: 4.9

            },
            {
                title: "정글의 법칙",
                src: "/test_images/jungle.jpg",
                ratio: 3.5
            },
            {
                title: "배틀트립",
                src: "/test_images/battletrip.jpg",
                ratio: 3.8
            },
            {
                title: "1박 2일",
                src: "/test_images/2nights1day.jpg",
                ratio: 4.2
            },
            {
                title: "뭉쳐야 뜬다",
                src: "/test_images/mungcheoyaddunda.jpg",
                ratio: 3.4
            }
        ]
    },
    {
        title: "먹고 사는 이야기",
        items: [
            {
                title: "나 혼자 산다",
                src: "/test_images/nahonjasanda.jpg",
                ratio: 3.4
            },
            {
                title: "효리네 민박 2",
                src: "/test_images/hyorineminbak.jpg",
                ratio: 3.7,
                desc : `소복하게 쌓인 눈과 함께한 겨울을 지나 따뜻한 햇살과 봄꽃들이 가득한 제주의 봄을 입은 “효리네 민박”

언제나 그랬듯, 이효리 부부가 차려주는 따뜻한 아침 식사와 포근한 잠자리가 제공되는 곳.
다정하고 성실한 직원 윤아가 반기는 곳. 색을 바꾼 또 다른 모습의 제주를 경험하는 시간.
봄에는 어떤 손님들이 찾아올까요?`,
                episodes: [
                    { title: "[1회] 효리네 민박 2", src: "/test_images/hyorineminbak-ep/ep1.jpg"},
                    { title: "[2회] 효리네 민박 2", src: "/test_images/hyorineminbak-ep/ep2.jpg"},
                    { title: "[3회] 효리네 민박 2", src: "/test_images/hyorineminbak-ep/ep3.jpg"},
                    { title: "[4회] 효리네 민박 2", src: "/test_images/hyorineminbak-ep/ep4.jpg"},
                    { title: "[5회] 효리네 민박 2", src: "/test_images/hyorineminbak-ep/ep5.jpg"},
                    { title: "[6회] 효리네 민박 2", src: "/test_images/hyorineminbak-ep/ep6.jpg"},
                    { title: "[7회] 효리네 민박 2", src: "/test_images/hyorineminbak-ep/ep7.jpg"},
                    { title: "[8회] 효리네 민박 2", src: "/test_images/hyorineminbak-ep/ep8.jpg"},
                    { title: "[9회] 효리네 민박 2", src: "/test_images/hyorineminbak-ep/ep9.jpg"},
                    { title: "[10회] 효리네 민박 2", src: "/test_images/hyorineminbak-ep/ep10.jpg"},
                    { title: "[11회] 효리네 민박 2", src: "/test_images/hyorineminbak-ep/ep11.jpg"},
                    { title: "[12회] 효리네 민박 2", src: "/test_images/hyorineminbak-ep/ep12.jpg"},

                    ]
            },
            {
                title: "전지적 참견 시점",
                src: "/test_images/jeonjijeokchamgeon.jpg",
                ratio: 2.1
            },
            {
                title: "이불 밖은 위험해",
                src: "/test_images/ebulbakeunwiheomhae.jpg",
                ratio: 3.9
            },
            {
                title: "냉장고를 부탁해",
                src: "/test_images/nangjanggo.jpg",
                ratio: 3.1
            }
        ]
    },
    {
        title: "음악이 듣고 싶을 때",
        items: [
            {
                title: "복면가왕",
                src: "/test_images/bokmyeongawang.jpg",
                ratio: 3.2
            },
            {
                title: "M COUNT DOWN",
                src: "/test_images/mcountdown.jpg",
                ratio: 3.8
            },
            {
                title: "주간아이돌",
                src: "/test_images/weeklyidol.jpg",
                ratio: 3.4
            },
            {
                title: "투유 프로젝트 - 슈가맨2",
                src: "/test_images/toyouproject.jpg",
                ratio: 3.1
            }
        ]
    },
];

const styles = {
    root: {
        // display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        // display: 'flex',
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
            visibleEpiBlockFlags: [],
            selectedShow: null,
            selectedEpisode: null,
            openRatingDialog: false
        };
    }

    componentDidMount() {
        this.setState({'visibleEpiBlockFlags': varietyShowCategories.map(() => false)});
    }

    onClickVarietyShowElement = (cate_idx, show_idx) => {
        return () => {
            let visibleEpiBlockFlags = this.state.visibleEpiBlockFlags;
            visibleEpiBlockFlags = visibleEpiBlockFlags.map((el) => false)
            visibleEpiBlockFlags[cate_idx] = true;

            //cate_idx가 들어가는 이유: 어떤 쇼를 택하든 밑에 박스가 나오는 것은 동일
            //그 박스 안에 들어가는 내용만 바꿔서 렌더링 해주면 되니까 꼭 show_idx를 전달하지 않아도 됌
            this.setState({'visibleEpiBlockFlags': visibleEpiBlockFlags});
            //
            this.setState({'selectedShow': varietyShowCategories[cate_idx].items[show_idx]});
            console.log(cate_idx, show_idx, this.state.visibleEpiBlockFlags, this.state.episodesOnCategory)
        }
    };

    onClickCloseBtn = () => {
        let visibleEpiBlockFlags = this.state.visibleEpiBlockFlags;
        visibleEpiBlockFlags = visibleEpiBlockFlags.map((el) => false);
        this.setState({'visibleEpiBlockFlags': visibleEpiBlockFlags});
    };

    onClickEpisode = (epi) => {
        return () => {
            this.setState({'selectedEpisode': epi});
            this.setState({'openRatingDialog': true});
        }
    };

    handleClose = () => {
        this.setState({'openRatingDialog': false})
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
                            <GridList cellHeight={240} cols={2.2} key={`cate_${idx}`}
                                      style={styles.gridList}>
                                {cate.items.map((show, show_idx) =>
                                    <GridTile key={`show_${idx}_${show_idx}`} title={show.title} style={{cursor: 'pointer'}}
                                              onClick={this.onClickVarietyShowElement(idx, show_idx)}
                                              subtitle={<StarRatings starRatedColor={'rgb(255, 180, 0)'} starDimension="15px" numberOfStars={5}
                                                     starSpacing="0"
                                                     rating={show.ratio}/>}>
                                            <img src={show.src} alt=""/>
                                    </GridTile>
                                )}
                            </GridList>
                            {this.state.visibleEpiBlockFlags[idx] && this.state.selectedShow.episodes ?
                                <div style={styles.root}>
                                    <div style={{textAlign: 'left', margin: '20px'}}>
                                        <AppBar
                                            title={<span>{this.state.selectedShow.title}</span>}
                                            style={{backgroundColor: 'black'}}
                                            iconElementLeft={<span> </span>}
                                            iconElementRight={<IconButton><NavigationClose /></IconButton>}
                                            onRightIconButtonClick={this.onClickCloseBtn}
                                        />
                                        <div style={{marginBottom:'30px'}}>
                                            <span>평균 평점 : </span>
                                            <StarRatings starRatedColor={'rgb(255, 180, 0)'} starDimension="30px" numberOfStars={5}
                                                         starSpacing="2px"
                                                         rating={3.7}/>
                                            <span>(3.7/5)</span>
                                        </div>

                                        {this.state.selectedShow.desc.split('\n').map(text => <p>{text}</p>)}
                                    </div>
                                    <GridList cellHeight={180} cols={2.2} key={`cate_${idx}`}
                                              style={styles.gridList}>
                                    {
                                        this.state.selectedShow.episodes.map((epi, epi_idx) =>
                                        <GridTile key={epi_idx} title={epi.title} style={{cursor: 'pointer'}}
                                                  onClick={this.onClickEpisode(epi)}>
                                            <img src={epi.src} alt=""/>
                                            <StarRatings starRatedColor={'rgb(255, 180, 0)'} starDimension="17px" numberOfStars={5}
                                                         starSpacing="0px"
                                                         rating={3.7}/>
                                        </GridTile>
                                    )}
                                    </GridList>

                                </div> : ''}
                        </div>
                    )}
                </div>
                <Dialog
                    title={this.state.selectedEpisode ? this.state.selectedEpisode.title : ''}
                    modal={false}
                    open={this.state.openRatingDialog}
                    onRequestClose={this.handleClose}
                    style={{textAlign: 'center'}}
                    titleStyle={{color: 'white', backgroundColor: 'black'}}
                    bodyStyle={{color: 'white', backgroundColor: 'black'}}>
                    <div>
                        {this.state.selectedEpisode ? <img src={this.state.selectedEpisode.src} alt=""/> : ''}
                    </div>
                    <StarRatings starRatedColor={'rgb(255, 180, 0)'} starDimension="50px" numberOfStars={5}
                             starSpacing="3px" starHoverColor={'rgb(255, 180, 0)'}
                             rating={3.5}/>

                </Dialog>
            </div>
        );
    }
}

export default Home;
