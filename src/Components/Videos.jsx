import React from 'react';
import {
  Stack,
  Heading,
  Button,
  VStack,
  Box,
} from '@chakra-ui/react';
import { useState } from 'react';

const Videos = () => {
  const videosArr = [
    'https://rr2---sn-5go7ynld.googlevideo.com/videoplayback?expire=1688919798&ei=loqqZOO4FPqa0u8PiNKJkAQ&ip=195.246.120.57&id=o-AHeGv7S8arPVDdZWx5-fPfo3ElZVbvIU3L3r7LXWLLW9&itag=18&source=youtube&requiressl=yes&mh=Ta&mm=31%2C29&mn=sn-5go7ynld%2Csn-5goeen7y&ms=au%2Crdu&mv=m&mvi=2&pl=23&initcwndbps=1677500&spc=Ul2Sq_T17g3SUkTVCxuQeJDv1m5zSmKAOKhEFy-r1w&vprv=1&svpuc=1&mime=video%2Fmp4&ns=fs7Zht2dNYo5tkK0zGZKRGUO&gir=yes&clen=13781460&ratebypass=yes&dur=183.808&lmt=1687717422674316&mt=1688897827&fvip=2&fexp=24007246%2C24363392&c=WEB&txp=4530434&n=Q8gUfcfV23mdHw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgFed5IgR7bbgYc7HDRbLVArpOE6o98JOdeb8EyzJWAo4CICi6lboDHuG_bqzVaT59CqadZjRtLtkNSjm-mJA0bEIg&sig=AOq0QJ8wRgIhANXiiwH9hndDNP1jdLUyCx7b9-IjXvLAO-vN40eOTUI9AiEApSacpmolzNlxEmAfZG0ZYn0P_m_5V7nFjZW4EVigRI4%3D',
    'https://rr1---sn-a5meknzs.googlevideo.com/videoplayback?expire=1688928126&ei=HquqZOidAv6vsfIP5qOVgAI&ip=143.244.48.157&id=o-ALASukENbJoMVIlMgfyhaE0yFfBk_wPfI29OxIw9vNiG&itag=18&source=youtube&requiressl=yes&mh=9P&mm=31%2C26&mn=sn-a5meknzs%2Csn-n4v7snse&ms=au%2Conr&mv=m&mvi=1&pl=26&initcwndbps=2060000&spc=Ul2Sq8aqaLPxcZb6eKfWEw-WSeNdeUqrG3u6C0ZnsA&vprv=1&svpuc=1&mime=video%2Fmp4&ns=aYc5plRUchFp8rwxwyO_d0gO&gir=yes&clen=12907082&ratebypass=yes&dur=171.434&lmt=1685725551481879&mt=1688906237&fvip=5&fexp=24007246%2C51000022&beids=24350017&c=WEB&txp=4530434&n=Kuxih8g7ttl44A&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgNQ_p4C7w4HO2f2bNTOJBrosbJSNpuTYcbEfA9CBhug0CIANaF3f2NV0n0vyDk9Ft5fiZLMaxgI4N5hlVrzGb0Tzy&sig=AOq0QJ8wRQIgJIRaOKYGeJHPi8uBv_VkR8kh95nDnmae_3sGsK6g2YoCIQDLe1zQwgUeIB5ZNOdKJ6X40jrcD0wUgfvn-Bbz29dnJw%3D%3D',
    'https://rr2---sn-5goeen7y.googlevideo.com/videoplayback?expire=1688931327&ei=n7eqZOCfCciwyAXGsJPoDA&ip=188.126.94.85&id=o-ADbmttCZjxCiPAyMQN8MB6tKToE0jeaBjPCwCa358K5a&itag=18&source=youtube&requiressl=yes&mh=GI&mm=31%2C26&mn=sn-5goeen7y%2Csn-i5heen7r&ms=au%2Conr&mv=m&mvi=2&pl=23&initcwndbps=3098750&spc=Ul2Sq7AXdXiouQy-PtJ8po8YOQdw3a7eEm16Qv_BtQ&vprv=1&svpuc=1&mime=video%2Fmp4&ns=atNlWEWmscf89zQWJeIUyu0O&gir=yes&clen=19130167&ratebypass=yes&dur=217.988&lmt=1684293103909333&mt=1688909356&fvip=2&fexp=24007246%2C51000011%2C51000012&c=WEB&txp=5538434&n=SVikmZ7uhP4yzw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgR9Rvs1MeSqK2whveJp9A1ESz5_MrY5rGIHFEiIjc6doCIQCgm2xv0N_Mj8E2-w_N3u6puyvfRbwaBgUuqKXvXk_dkQ%3D%3D&sig=AOq0QJ8wRgIhAOzMIDrsMNvDxlGWcJjUVuevbQjdnCAFPi2NxhUhcqQUAiEAzIVXX2xd8htzbIs06lAbgFP4-64426eOhNgnk6WnbS0%3D',
    'https://rr4---sn-o097znsd.googlevideo.com/videoplayback?expire=1688917537&ei=wYGqZOWRJpKhsfIPk-2NyAw&ip=184.170.252.157&id=o-AFKWtGhXvJ_thUJ4pGX_pvov_n3UT8GR4sgTiF-KPT8p&itag=18&source=youtube&requiressl=yes&mh=P-&mm=31%2C29&mn=sn-o097znsd%2Csn-a5msen76&ms=au%2Crdu&mv=m&mvi=4&pl=24&initcwndbps=1861250&spc=Ul2Sq-KDGJ3ZckKCsHeuwJY-NepIGYrblxggeuUieA&vprv=1&svpuc=1&mime=video%2Fmp4&ns=eWud5YP4eoV9pqOrBeAnMTMO&cnr=14&ratebypass=yes&dur=166.463&lmt=1678140041473600&mt=1688895436&fvip=4&fexp=24007246%2C24363392%2C51000011&beids=24350018&c=WEB&txp=4530434&n=IciB-_QVdns3Aw&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRAIgOluSvCjpB2ShOoFOSka9HcoRzTuxU1F06f8sq-FmBWYCIDP5o5kLTJ5_t0oA6vnd_pt9mwrvdTe9betgYDCTycd9&sig=AOq0QJ8wRQIhAJDScg_fLDHBhP4Epo1vCDLDDlKYeJF0I03sjP71XardAiB7AbGvhQb4JTVND_IGEWe6opjGiLtCPm53cIzBpi5vxQ%3D%3D',
    'https://rr2---sn-gwpa-pmhl.googlevideo.com/videoplayback?expire=1688926140&ei=XKOqZOX1G7ex9fwPsren4AY&ip=2405%3A201%3Ae015%3A8172%3A7913%3A7d5c%3A62a3%3A59b&id=o-AB_9KcG7dLjfkDVJcAjX3JFsOtWb14fsIVBSm5l88BNu&itag=18&source=youtube&requiressl=yes&mh=SZ&mm=31%2C29&mn=sn-gwpa-pmhl%2Csn-gwpa-jwce&ms=au%2Crdu&mv=m&mvi=2&pl=48&gcr=in&initcwndbps=607500&spc=Ul2SqxD4xDyRqKurvFugLXypU2UfhnZWnTLEQ1x47g&vprv=1&svpuc=1&mime=video%2Fmp4&ns=hOVBdmsdcTfTOM7Ryc8GkW8O&gir=yes&clen=3801680&ratebypass=yes&dur=203.104&lmt=1681805523550756&mt=1688904070&fvip=4&fexp=24007246&beids=24350017&c=WEB&txp=2319224&n=mZJH4b8hYYfkNg&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cgcr%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIgJT2FTlqDq45Ij9JO31GQa4x5vQdS-n6VGA4ymWbpuXACIQC1PHUGG5aWN_mCDP4z9pnpOA_FqcZWiiDwoVrzzvLLzA%3D%3D&sig=AOq0QJ8wRQIgPDAxJifJvjh6-9F0NaGYh9GtfItZ1YZ3P0x4uJF6KP4CIQCYOZWrbn5ruDdVD31-nlLt_q2d06HhRzAPq6qMb2TgWA%3D%3D',
    'https://rr3---sn-vgqskn6z.googlevideo.com/videoplayback?expire=1688915528&ei=6HmqZLWmMI6N_9EPjL2A4Aw&ip=181.214.166.54&id=o-ABqWTP20EL85zH4N3P4v3ChD_2JivegvXZb0eLaUqM8y&itag=18&source=youtube&requiressl=yes&mh=83&mm=31%2C29&mn=sn-vgqskn6z%2Csn-vgqsrnsy&ms=au%2Crdu&mv=m&mvi=3&pl=27&initcwndbps=1011250&spc=Ul2Sq94TPOLVfUeIrI1UTk8PONqVJnOQdSOp7tXfmg&vprv=1&svpuc=1&mime=video%2Fmp4&ns=gdmMvqjm0RUDkEEInZABq_kO&cnr=14&ratebypass=yes&dur=170.945&lmt=1666496449288892&mt=1688893749&fvip=5&fexp=24007246%2C51000011%2C51000022&beids=24350017&c=WEB&txp=4530434&n=1NC0tglXHeB7MA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Ccnr%2Cratebypass%2Cdur%2Clmt&lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cinitcwndbps&lsig=AG3C_xAwRQIhAJohCf0OVLLTiEwCR9mPfoCzrN2EhgDPmKZBXQq_QDUTAiAgEkxNfJ6GpXmFFNiehc_3iheusHZNOPQvWtNZbygPBw%3D%3D&sig=AOq0QJ8wRgIhAMOS8BTjrAwspMOKqSAQxTp8k1VUK43Ximq-32hWDeR3AiEA3bLnwnGdHtLzieGq1_mz1nzEMnpozcdUWdwohGrlr7Y%3D',
  ];

  const [src, setSrc] = useState(videosArr[0]);

  return (
    <>
      <Stack justifyContent="space-evenly" direction={['column', 'row']} className='videos-css'>
        <Box
          borderColor="purple.200"
          borderWidth={3}
        >
          <video
            controls
            controlsList="nodownload"
            src={src}
          ></video>
        </Box>
        <Box
          // borderWidth={3}
          // maxWidth="500px"
          // height="65vh"
          // className="video-box"
          padding={4}
        >
          <Heading borderBottom="3px solid grey" lineHeight="2" fontSize="34px">
            Videos
          </Heading>
          <VStack>
            {
              videosArr.map((item, index) => (
                <Button variant={'ghost'} colorScheme={'purple'} onClick={()=> setSrc(videosArr[index])}>
                  Video {index + 1}
                </Button>
              ))
            }
          </VStack>
        </Box>
      </Stack>
    </>
  );
};

export default Videos;
