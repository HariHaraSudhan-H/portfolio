import { Avatar, Box, Link, Typography } from "@mui/material";
import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
const Home = () => {
  return (
    <Box sx={{ justifyContent: "center", textAlign: "center", marginY: "10%" }}>
      <Avatar
        alt="Remy Sharp"
        src="https://lh3.googleusercontent.com/pw/ADCreHdhna5i5NSSQTdW0nqFbHQRZXoqguWBrIPhPlwcubqN2zZa_mRhCFmlShZ_FRuMA90DI-JwGBut4x-Q6uJUceo7ZHFN5xhVatldltkFarH2wUHqadpvIqEyEmtStnhq5SQzw5Gq-FRrmuyNorHWdd5vl3ycX2lPdIPuIbzuicaehSIP0sg9AvfEX5RCFfh37M9A6NSsf3pbG6CKr_eREuBruo0H2_hM5wGxP0Iu__Gat-GTmPwyvxFY8DnYU_ivEOBtobIpEBA9-N4vnJiOXOflsc0k0S8Qi0nQAGJttvAUP14nc9vOMVBOBWHrGjNLJHLPZFvGyCJyQEw5bsB6OK0SfjHOcicI1FsKMLRJdgMffkdnWCR2gNTmLDh-_UYvwVhLkTXg8lGNOat9cgkHTnJpqo0IPKNybKLpQFmRQlNY9raz38WvJsJImfgDsgAYxuhHqoy80yp2CikpdYAiMvXjWu3YUvSfE9I8euVpWh5rlIw_JjuxfxSnz051An9ZCWE_ZPegFhDa3i7lzN-cDk5ZqacZ9Y8KNAyYgMS4ITlc9d439CJYO6YW1VdyjWzduZLUpzRfQFh-cY5vb7lB12h9qxWJcWiwh_ioWteTnv0b83mTGtxNBrVsfikW765OSoDMJWNN89Q3n25AxgkypM_9Tqev3biEA2mboOB_DcRMlx-OyjGjWUYlh26cmleUTv-jk32rSgpR276-ugQjnSbXTKVHlYqHgWPtCQFvMqTh0TKfXVnNBlm_wKfxn_h0yEMrDmukzdSNhenCeER1ARTUcmTka3nqqhdtIG84anLzEoCH8GLLGA-jdnxDkRY_sY48NoB9OUI9nrYrg1gWYr2rZEtvnOH-0TwNqio7RvwYL2xCyY9Cs88Qt_-WXnX48tKPMjJ8EIUX32sLd2gbZG4hT9ifbFujtUCmXoTFhBAhqbt2nBkNsk5vWplwCqJulcFO_axBX9nq60Eyv4cH0-AmqDnAkBoRGmM=w612-h612-s-no-gm?authuser=0"
        sx={{ width: 250, height: 250, marginX: "auto" }}
      />
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "2rem",
          marginY: 1,
          fontFamily: "inherit",
          fontWeight: "800",
        }}
      >
        HariHaraSudhan
      </Typography>
      <Typography sx={{ fontWeight: "bold", fontFamily: "inherit" }}>
        Frontend Web Developer
      </Typography>
      <Typography>Design Engineer | Tata Technologies | Pune</Typography>
      <Link href="https://github.com/HariHaraSudhan-H" target="_blank"  underline="none" color={"black"}>
        <GitHubIcon sx={{ margin: "1%" }} />
      </Link>
      <Link href="https://www.linkedin.com/in/hariharasudhan-h-a28677193/" target="_blank"  underline="none" color={"black"}>
        <LinkedInIcon sx={{ margin: "1%" }} />
      </Link>
      <Link href="mailto:hari.sudhan612@gmail.com" target="_blank"  underline="none" color={"black"}>
        <MailRoundedIcon sx={{ margin: "1%" }} />
      </Link>
      <Link href="https://t.me/hariharasudhan_h" target="_blank"  underline="none" color={"black"}>
        <TelegramIcon sx={{ margin: "1%" }} />
      </Link>
      <Link href=" https://wa.me/9543691902" target="_blank"  underline="none" color={"black"}>
        <WhatsAppIcon sx={{ margin: "1%" }} />
      </Link>
    </Box>
  );
};

export default Home;
