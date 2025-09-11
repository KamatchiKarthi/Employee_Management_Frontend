import instance from '../Service/axiosConfig';

export const CreateEmpolyee = async values => {
  try {
    const response = await instance.post('/employee/create', values);
    console.log(response);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getEmployee = async () => {
  try {
    const response = await instance.get('/employee/all');
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getEmployeeById = async id => {
  try {
    const response = await instance.get(`/employee/empoly/${id}`);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const updateEmployee = async (id, values) => {
  try {
    const response = await instance.put(`/employee/update/${id}`, values);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const DeleteEmployee = async id => {
  try {
    const response = await instance.delete(`/employee/delete/${id}`);
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
