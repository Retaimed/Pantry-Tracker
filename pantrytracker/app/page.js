'use client';
import { Box, Stack, Typography } from "@mui/material";
import { firestore } from "@/firebase";
import { collection, query, getDocs } from "firebase/firestore"; // import the required functions
import { useEffect, useState } from "react";

export default function Home() {
  const [pantry, setPantry] = useState([]);
  
  useEffect(() => {
    const updatePantry = async () => {
      const q = query(collection(firestore, 'Pantry'));
      const snapshot = await getDocs(q);
      const pantryList = [];
      snapshot.forEach((doc) => {
        pantryList.push(doc.id);
      });
      console.log(pantryList);
      setPantry(pantryList);
    };
    updatePantry();
  }, []);
  
  return (
    <Box 
      width="100vw" 
      height="100vh" // width and height set to the whole screen 
      display={"flex"}
      justifyContent={"center"}  
      flexDirection={"column"}
      alignItems={"center"}
    >
      <Box border={'1px solid #333'}>
        <Box width="800px" height="100px" bgcolor={'#ADD8E6'}>
          <Typography variant="h2" color={'#333'} textAlign={'center'}>
            Pantry Tracker
          </Typography>
        </Box>
        <Stack width="800px" height="300px" spacing={2} overflow={'scroll'}>
          {pantry.map((item) => (
            <Box 
              key={item}
              width="100%" 
              height="100px"
              display="flex"
              justifyContent="center"
              alignItems="center"
              bgcolor={'#f0f0f0'}
            >
              <Typography
                variant="h3"
                color={'#333'}
                textAlign={'center'}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
