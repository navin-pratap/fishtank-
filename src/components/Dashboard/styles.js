import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  footer: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: '#EDF6FA 0% 0% no-repeat padding-box',
  },
  header: {
    padding: theme.spacing(2),
    height: 20,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    background: '#007DB4 0% 0% no-repeat padding-box',
  },
  textColor: {
    color: '#C8102E',
    textAlign: 'center',
    font: 'normal normal bold 16px/20px Open Sans',
  },
  heroBanner: {
    height: 325,
    background: '#F2F2F2 0% 0% no-repeat padding-box',
    opacity: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bannerMain: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  banner: {
    width: 600,
    height: 300,
    background: '#F2F2F2 0% 0% no-repeat padding-box',
    opacity: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    background: '#007DB4 0% 0% no-repeat padding-box',
    color: '#ffffff',
    borderRadius: theme.spacing(0.5),
    opacity: 1,
  },
  secondBanner: {
    width: 700,
    height: 400,
    background: '#00567C 0% 0% no-repeat padding-box',
    color: '#ffffff',
    opacity: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: theme.spacing(5),
  },
  secondBannerVideoPlayer: {
    width: 700,
    height: 400,
    opacity: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  videoPlayer: {
    width: '700px !important',
    height: '400px !important',
  },
  marginTop: {
    marginTop: theme.spacing(3),
  },
  paper: {
    height: 225,
    width: 400,
  },
  articlesImage: {
    height: 145,
    background: '#B2B2B2 0% 0% no-repeat padding-box',
    borderRadius: '4px 4px 0px 0px',
  },
  articlesContent: {
    height: 80,
    background: '#FFFFFF 0% 0% no-repeat padding-box',
    borderRadius: '0px 0px 4px 4px',
    paddingLeft: theme.spacing(2),
  },
  articlesContentText: {
    textAlign: 'left',
    font: 'normal normal bold 16px/22px Open Sans',
    letterSpacing: 0,
    color: '#4D4D4D',
    textTransform: 'capitalize',
    opacity: 1,
  },
  articlesReadMore: {
    textAlign: 'left',
    font: 'normal normal normal 16px/22px Open Sans',
    letterSpacing: 0,
    color: '#007DB4',
    opacity: 1,
    cursor: 'pointer',
  },
}));
