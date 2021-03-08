/* eslint-disable no-param-reassign */
import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import multer from 'multer';

const upload = multer(uploadConfig);

const transactionsRouter = Router();

transactionsRouter.get('/', async (request, response) => {
  const transactionRepository = getCustomRepository(TransactionRepository);
  const transactions = await transactionRepository.find();
  const balance = await transactionRepository.getBalance();
  return response.json({ transactions, balance });
});

transactionsRouter.post('/', async (request, response) => {
  const { title, value, type, category } = request.body;
  const createTransactionService = new CreateTransactionService();
  const transaction = await createTransactionService.execute({
    title,
    value,
    type,
    category,
  });
  return response.json(transaction);
});

transactionsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;
  const deleteTransactionService = new DeleteTransactionService();
  await deleteTransactionService.execute(id);
  return response.status(204).send();
});

transactionsRouter.post(
  '/import',
  upload.single('file'),
  async (request, response) => {
    const importTransaction = new ImportTransactionsService();

    const transaction = await importTransaction.execute(request.file.path);

    return response.json(transaction);
  },
);

export default transactionsRouter;