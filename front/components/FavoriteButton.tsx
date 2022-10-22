import { Box, IconButton, useToast } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export default function FavoriteButton() {
  const toast = useToast();
  return (
    <IconButton
      variant="outline"
      aria-label="favorite"
      colorScheme="yellow"
      icon={<StarIcon />}
      onClick={() =>
        toast({
          position: "bottom-left",
          render: () => (
            <Box color="white" p={3} bg="yellow.400">
              お気に入り登録しました！
            </Box>
          ),
        })
      }
    ></IconButton>
  );
}
