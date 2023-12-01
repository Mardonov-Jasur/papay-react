import { ExpandMore } from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Stack,
  Tab,
  Typography
} from "@mui/material";
import React, { useState } from "react";

export function HelpPage() {
  const [value, setValue] = useState("1");

  const faqData = [
    {
      question: "To'lov qanday amalga oshiriladi",
      answer:
        "To'lovni payme, click ilovalari orqali amalga oshirishingiz mumkin "
    },
    {
      question: "Sayt rivoji uchun o'z hissangizni qo'shing",
      answer: "Albatta buning uchun o'z hissamni qo'shmoqchiman "
    },
    {
      question: "To'lov qanday amalga oshiriladi",
      answer:
        "To'lovni payme, click ilovalari orqali amalga oshirishingiz mumkin "
    },
    {
      question:
        "Saytdan to'laqonli yani buyurtmalar qilish, jonli muloqotlardan foydalanishingiz uchun ro'yxatdan o'tishingiz shart.",
      answer:
        "Jonli muloqot vaqtida bexayo so'zlarni ishlatish mutlaqo taqiqlanadi. "
    },
    {
      question: "To'lov qanday amalga oshiriladi",
      answer:
        "To'lovni payme, click ilovalari orqali amalga oshirishingiz mumkin "
    },
    {
      question: "To'lov qanday amalga oshiriladi",
      answer:
        "To'lovni payme, click ilovalari orqali amalga oshirishingiz mumkin "
    },
    {
      question: "To'lov qanday amalga oshiriladi",
      answer:
        "To'lovni payme, click ilovalari orqali amalga oshirishingiz mumkin "
    },
    {
      question: "Sayt rivoji uchun o'z hissangizni qo'shing",
      answer: "Albatta buning uchun o'z hissamni qo'shmoqchiman "
    },
    {
      question: "To'lov qanday amalga oshiriladi",
      answer:
        "To'lovni payme, click ilovalari orqali amalga oshirishingiz mumkin "
    },
    {
      question: "To'lov qanday amalga oshiriladi",
      answer:
        "To'lovni payme, click ilovalari orqali amalga oshirishingiz mumkin "
    },
    {
      question: "Sayt rivoji uchun o'z hissangizni qo'shing",
      answer: "Albatta buning uchun o'z hissamni qo'shmoqchiman "
    }
  ];

  const rules = [
    `Saytdan to'laqonli yani buyurtmalar qilish,
    jonli muloqotdan foydalanishingiz uchun ro'yxatdan o'tishingiz shart`,
    `Jonli muloqot vaqtida bexayo so'zlarni ishlatish mutlaqo taqiqlanadi.`,
    `Saytdan to'laqonli yani buyurtmalar qilish,
    jonli muloqotdan foydalanishingiz uchun ro'yxatdan o'tishingiz shart`,
    `Barcha xarakatlaringiz adminlarimiz 
    nazorati ostida bo'lganligi sabab, iltimos talablarga rioya qiling`
  ];

  const handleChange = (event: any, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="help_page">
      <Container className="help_container">
        <TabContext value={value}>
          <Box className="help_menu">
            <Box className="divider">
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example">
                <Tab label="Qoidalar" value={"1"} />
                <Tab label="FAQ" value={"2"} />
                <Tab label="Adminga xat" value={"3"} />
              </TabList>
            </Box>
          </Box>
          <Stack>
            <Stack className="help_main_content">
              <TabPanel value={"1"}>
                <Stack className="rules_box">
                  {rules.map((vl) => {
                    return <p>{vl}</p>;
                  })}
                </Stack>
              </TabPanel>
              <TabPanel value="2">
                <Stack className="accordian_menu">
                  {faqData.map((item) => {
                    return (
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMore />}
                          aria-controls="panella-content"
                          id="panella-header">
                          <Typography>{item.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>{item.answer}</Typography>
                        </AccordionDetails>
                      </Accordion>
                    );
                  })}
                </Stack>
              </TabPanel>
              <TabPanel value="3">
                <Stack className="admin_letter_container">
                  <Box className="admin_letter_frame">
                    <span>Adminga Xabar Qoldirish</span>
                    <p>
                      Assalomu alaykum! Adminga xabar qoldirish uchun pastdagi
                      formlarni to’ldiring!{" "}
                    </p>
                  </Box>
                  <form action="#" method="POST" className="letter_form">
                    <div className="input_letter_box">
                      <label htmlFor="name">Ism</label>
                      <input type="text" name="mb_nick" placeholder="Ism" />
                    </div>
                    <div className="input_letter_box">
                      <label htmlFor="email">Elektron Manzil</label>
                      <input
                        type="email"
                        name="mb_mail"
                        placeholder="Elektron Manzil"
                      />
                    </div>
                    <div className="input_letter_box">
                      <label htmlFor="subject">Xabar</label>
                      <textarea name="mb_msg" placeholder="Xabar"></textarea>
                    </div>
                  </form>
                  <Box className="send_btn">
                    <Button variant="contained" type="submit">
                      Jo'natish
                    </Button>
                  </Box>
                </Stack>
              </TabPanel>
            </Stack>
          </Stack>
        </TabContext>
      </Container>
    </div>
  );
}

