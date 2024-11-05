// axiosInstance.ts

import { APIEndPoints, StorageKeys } from '@src/constants';
import axios, { AxiosResponse } from 'axios';
import localStorage from 'redux-persist/es/storage';
import Snackbar from 'react-native-snackbar';
import { storage } from '@src/context';
import RNFS from 'react-native-fs';
import { Alert, Platform, Share as NativeShare } from 'react-native';
import Share from 'react-native-share';

interface SignInData {
  devicetype: string;
  devicetoken: string;
  appversion: string;
  pushnotificationid: string;
  source: string;
  lang: string;
  username: string;
  password: string;
}

interface DashBoard {
  lang: string;
}
interface DownloadFile {
  dealId: string;
  lang: string;
  format: string;
}
interface RedeemType {
  _RedeemData: any;
}
const header = {
  headers: {
    'Content-Type': 'application/json',
  },
};

let userData = storage.getData(StorageKeys.USER_DATA);

const getAuthHeaders = async () => {
  const userData = await storage.getData(StorageKeys.USER_DATA);
  return {
    'Content-Type': 'application/json',
    'X-Auth-Token': `${userData?.access_token}`,
  };
};

export const SignInHandler = async (
  _data: SignInData,
): Promise<AxiosResponse<any>> => {
  try {
    console.log('login data///', _data);
    // const response = await axios.post(
    //   `${APIEndPoints.BaseUrl}/${APIEndPoints.Login}`,
    //   _data,
    //   header,
    // );
    const response = await axios({
      method: 'POST',
      url: `${APIEndPoints.BaseUrl}/${APIEndPoints.Login}`,
      data: _data,
      headers: header,
    });
    return response;
  } catch (error) {
    console.log('login API error m', error?.responce); // no error data in responce

    Snackbar.show({
      text: error?.message,
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: '#DA0B1B',
    });
    throw error;
  }
};

export const MyOfferdHandler = async (
  language: DashBoard,
): Promise<AxiosResponse<any>> => {
  const authHeaders = await getAuthHeaders();
  try {
    // const response = await axios.get(
    //   `${APIEndPoints.BaseUrl}/${APIEndPoints.MyOffer}?lang=${language}`,
    //   authHeaders,
    // );
    const response = await axios({
      method: 'GET',
      url: `${APIEndPoints.BaseUrl}/${APIEndPoints.MyOffer}?lang=${language}`,
      headers: authHeaders,
    });
    return response;
  } catch (error) {
    console.log('DashBoard API error m', error);
    Snackbar.show({
      text: error?.message,
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: '#DA0B1B',
    });
    throw error;
  }
};

export const DashBoardSummary = async (
  language: DashBoard,
): Promise<AxiosResponse<any>> => {
  try {
    const authHeaders = await getAuthHeaders();
    // console.log('header//DashBoardSummary', authHeaders);
    // const response = await axios.get(
    //   `${APIEndPoints.BaseUrl}/${APIEndPoints.DashBoardSummary}?lang=${language}`,
    //   authHeaders,
    // );

    const response = await axios({
      method: 'GET',
      url: `${APIEndPoints.BaseUrl}/${APIEndPoints.DashBoardSummary}?lang=${language}`,
      headers: authHeaders,
    });
    return response;
  } catch (error) {
    console.log('DashBoard API error m', error);
    Snackbar.show({
      text: error?.message,
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: '#DA0B1B',
    });
    throw error;
  }
};

const arrayBufferToBase64 = (buffer: ArrayBuffer) => {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
};

export const DownloadFile = async (
  _data: DownloadFileProps,
): Promise<AxiosResponse<any>> => {
  try {
    const authHeaders = await getAuthHeaders();
    const isBinaryFormat =
      _data.format === 'pdf' ||
      _data.format === 'xls' ||
      _data.format === 'xlsx';
    const responseType = isBinaryFormat ? 'arraybuffer' : 'text';
    2;
    // API call to get the file data
    const response = await axios({
      method: 'GET',
      url: `${APIEndPoints.BaseUrl}/render/merchant/export?dealId=${_data.dealId}&format=${_data.format}`,
      headers: authHeaders,
      responseType,
    });

    const fileName = `Cobone-Vouchers-${_data.dealId}.${_data.format}`;
    const filePath = `${Platform.OS === 'ios' ? RNFS.DocumentDirectoryPath : RNFS.DownloadDirectoryPath}/${fileName}`;
    console.log('filePath:', filePath);

    // Save the file based on its format
    if (isBinaryFormat) {
      const base64Data = arrayBufferToBase64(response.data);
      await RNFS.writeFile(filePath, base64Data, 'base64');
    } else {
      await RNFS.writeFile(filePath, response.data, 'utf8');
    }

    // Share the file on iOS to allow the user to save it to "Files"
    try {
      if (Platform.OS === 'ios') {
        try {
          await NativeShare.share({
            url: filePath,
            title: 'Save file',
          });
          console.log('File shared successfully on iOS');
        } catch (shareError) {
          console.log('Error sharing file on iOS:', shareError);
        }
      } else {
        // Android specific sharing with react-native-share
        try {
          await Share.open({
            url: `file://${filePath}`,
            title: 'Save file',
          });
          console.log('File shared successfully on Android');
        } catch (shareError) {
          console.log('Error sharing file on Android:', shareError);
        }
      }
    } catch (shareError) {
      console.log('General error while sharing file:', shareError);
    } finally {
      console.log('File saved successfully at:', filePath);
    }

    return response;
  } catch (error) {
    console.log('DownloadFile API error:', error);
    Snackbar.show({
      text: error?.message || 'Failed to download file',
      duration: Snackbar.LENGTH_LONG,
      backgroundColor: '#DA0B1B',
    });
    throw error;
  }
};

// export const Redeem = async (
//   _data: RedeemType,
// ): Promise<AxiosResponse<any>> => {
//   const authHeaders = await getAuthHeaders();

//   // Convert _data to query parameters
//   const queryString = new URLSearchParams(_data).toString();
//   console.log(
//     '////authHeaders',
//     authHeaders,
//     '////URL///',
//     `${APIEndPoints.BaseUrl}/${APIEndPoints.redeem}${_data}`,
//   );
//   const response = await axios({
//     method: 'GET',
//     url: `${APIEndPoints.BaseUrl}/${APIEndPoints.redeem}${_data}`,
//     headers: authHeaders,
//   })
//     .then((res) => {
//       console.log('responce.', res);
//     })
//     .catch((error) => {
//       console.log('error//', error);
//       if (error.response) {
//         console.log('Error response data:', error.response.data);
//       } else {
//         console.log('Error message:', error.message);
//       }
//       console.log('Full error object:', error);
//     });
//   };

export const Redeem = async (
  _data: RedeemType,
): Promise<AxiosResponse<any>> => {
  try {
    const authHeaders = await getAuthHeaders();
    console.log('///...//_data', _data);
    const response = await axios({
      method: 'GET',
      url: `${APIEndPoints.BaseUrl}/${APIEndPoints.redeem}${_data}`,
      headers: authHeaders,
    });
    return response;
  } catch (error) {
    if (error.response) {
      Snackbar.show({
        text: error?.response?.data?.errors[0]?.userMessage,
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#DA0B1B',
      });
      console.log(
        'Error response data://',
        error.response.data?.errors[0]?.userMessage,
      );
    } else {
      console.log('Error message://', error.message);
    }

    throw error;
  }
};
